import React, { useEffect, useRef, useState } from 'react'; // Added useState
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/home/Home';
import './index.css';
import Curtains from './components/Curtains';
import Loader from './components/Loader'; // Make sure this component accepts an 'isLoading' prop
import Navbar from './components/common/Navbar'
import Process from './components/process/Process';
import Shop from './components/shop/Shop';
import AgenceFixed from './components/agence/AgenceFixed';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import ProjectDetail from './components/HomeAbout/ProjectDetail';

function AppContent() {
  const location = useLocation();
  const scriptsInitialized = useRef(false);
  const webflowInitialized = useRef(false);

  // State to control the Loader
  const [isLoading, setIsLoading] = useState(true);

  // Function to destroy Webflow properly
  const destroyWebflow = () => {
    try {
      if (window.Webflow && typeof window.Webflow.destroy === 'function') {
        window.Webflow.destroy();
      }

      // Clean up jQuery events
      if (window.$) {
        $(document).off('wf-ready wf-destroy');
      }

      // Clear any Webflow intervals/timeouts
      if (window.__wf_interval) {
        clearInterval(window.__wf_interval);
        window.__wf_interval = null;
      }
    } catch (e) {
      console.warn('Error during Webflow cleanup:', e);
    }

    webflowInitialized.current = false;
  };

  // Function to reinitialize Webflow on route change
  const initializeWebflow = () => {
    if (!window.Webflow || !window.$) {
      console.warn('Webflow or jQuery not available');
      return;
    }

    try {
      // Destroy existing instance if any
      if (webflowInitialized.current) {
        destroyWebflow();
      }

      // Wait for DOM to be ready
      const init = () => {
        if (!window.Webflow) return;

        // Initialize Webflow
        if (typeof window.Webflow.ready === 'function') {
          window.Webflow.ready();
        }

        // Initialize interactions
        try {
          const ix2 = window.Webflow.require?.('ix2');
          if (ix2 && typeof ix2.init === 'function') {
            ix2.init();
          }
        } catch (e) {
          console.warn('IX2 init failed:', e);
        }

        // Initialize forms
        try {
          const forms = window.Webflow.require?.('forms');
          if (forms && typeof forms.init === 'function') {
            forms.init();
          }
        } catch (e) {
          console.warn('Forms init failed:', e);
        }

        webflowInitialized.current = true;
      };

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
      } else {
        init();
      }
    } catch (error) {
      console.error('Error initializing Webflow:', error);
    }
  };

  // Function to reinitialize all animations
  const reinitializeAnimations = () => {
    // Small delay to ensure DOM is updated
    setTimeout(() => {
      // Refresh GSAP ScrollTrigger
      if (window.ScrollTrigger) {
        try {
          window.ScrollTrigger.getAll().forEach(trigger => {
            if (!trigger.vars.trigger || (typeof trigger.vars.trigger === 'string' && !document.querySelector(trigger.vars.trigger))) {
              // Only kill if it's clearly invalid
            }
          });
          window.ScrollTrigger.refresh();
        } catch (e) {
          console.warn('ScrollTrigger refresh failed:', e);
        }
      }

      // Reinitialize Webflow
      initializeWebflow();

      // Reinitialize Lenis if needed
      if (window.lenis) {
        try {
          window.lenis.resize();
        } catch (e) { }
      }

      // Reinitialize custom animations
      if (window.initCustomAnimations) {
        try {
          window.initCustomAnimations();
        } catch (e) {
          console.warn('Custom animations init failed:', e);
        }
      }

      // Trigger resize event for responsive elements
      window.dispatchEvent(new Event('resize'));

    }, 150);
  };

  // Load and initialize scripts only once
  useEffect(() => {
    if (scriptsInitialized.current) return;
    scriptsInitialized.current = true;

    const isJqueryLoaded = () => typeof window.$ !== 'undefined';
    const isWebflowLoaded = () => typeof window.Webflow !== 'undefined';

    const loadScript = (src, checkExists = false) => {
      return new Promise((resolve, reject) => {
        if (checkExists && document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const initScripts = async () => {
      try {
        // Show loader on initial page load/reload
        setIsLoading(true);

        if (!isJqueryLoaded()) {
          await loadScript("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69689842a40a17ac45e5418a");
          await new Promise(resolve => setTimeout(resolve, 50));
        }

        if (!isWebflowLoaded()) {
          await loadScript("https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/js/webflow.schunk.bb13de08e76422e1.js");
          await loadScript("https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/js/webflow.a0aa6ca1.1176730d49a681da.js");
        }

        initializeWebflow();

        const mainScriptSrc = `/js/main.js?t=${Date.now()}`;
        if (!document.querySelector(`script[src="${mainScriptSrc}"]`)) {
          await loadScript(mainScriptSrc);
        }

        reinitializeAnimations();

        // Hide loader after initial scripts are ready
        setTimeout(() => setIsLoading(false), 500);

      } catch (error) {
        console.error('Error loading scripts:', error);
        setIsLoading(false); // Ensure loader hides on error
      }
    };

    initScripts();

    return () => {
      destroyWebflow();
      if (window.lenis) {
        window.lenis.destroy();
      }
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(t => t.kill());
      }
    };
  }, []);

  // Handle route changes (Inner Page Navigation)
  useEffect(() => {
    // 1. Start Loader immediately on route change
    setIsLoading(true);

    // Global reload logic for all inner pages (navbar links)
    const currentPath = location.pathname;
    if (currentPath !== '/') {
      const lastReloaded = sessionStorage.getItem('last_reloaded_path');
      if (lastReloaded !== currentPath) {
        sessionStorage.setItem('last_reloaded_path', currentPath);
        window.location.reload();
        return;
      }
    } else {
      // Reset flag when back on home so inner pages reload again on next visit
      sessionStorage.removeItem('last_reloaded_path');
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // 2. Wait for DOM and scripts to be ready
    const timeoutId = setTimeout(() => {
      reinitializeAnimations();

      // Force reflow for any remaining Webflow elements
      const webflowElements = document.querySelectorAll('[data-wf]');
      webflowElements.forEach(el => {
        el.style.display = 'none';
        el.offsetHeight; // Force reflow
        el.style.display = '';
      });

      // 3. Hide Loader after content is initialized
      // You can adjust this time depending on how long your animations take
      setTimeout(() => {
        setIsLoading(false);
      }, 500);

    }, 50);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return (
    <>
      {/* Pass isLoading state to Loader */}
      <Loader isLoading={isLoading} />

      <Curtains />
      <div className="grain-bg" />
      <Navbar />

      <div className="page-wrapper" style={{ opacity: isLoading ? 0 : 1, transition: isLoading ? 'none' : 'opacity 0.3s ease-in' }}>
        <div className="transition-curtains">
          <div className="curtain curtain-left"></div>
          <div className="curtain curtain-right"></div>
        </div>

        <main data-taxi="" className="main-wrapper">
          <div data-taxi-view="" className="page_view">
            <div className="voile"></div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projets" element={<Projects />} />
              <Route path="/agence" element={<AgenceFixed />} />
              <Route path="/process" element={<Process />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projets/:slug" element={<ProjectDetail />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  );
}

function App() {
  return <AppContent />;
}

export default App;