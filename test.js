(function() {
    // Function to create and insert the new div
    function insertDynamicContent(targetElement) {
        const dynamicDiv = document.createElement('div');
        dynamicDiv.className = 'p-2 border-t border-gray-200 dark:border-white/10 text-left text-gray-500 dark:text-gray-400';
        dynamicDiv.innerHTML = `
            Powered By 
            <a href="https://trieve.ai" target="_blank">Trieve</a
        `;
        targetElement.appendChild(dynamicDiv);
    }

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle the intersection observer
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                insertDynamicContent(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }

    // Set up the intersection observer
    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    // Function to start observing the target element
    function startObserving(targetElement) {
        if (targetElement) {
            observer.observe(targetElement);
        }
    }

    // Set up a MutationObserver to watch for the target element being added to the DOM
    const mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                const targetElement = document.querySelector("[id^='headlessui-dialog-panel-']");
                if (targetElement) {
                    startObserving(targetElement);
                    mutationObserver.disconnect(); // Stop observing once we've found our element
                }
            }
        });
    });

    // Start observing the document body for changes
    mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
    });

    // You may want to stop the mutation observer after a certain time to prevent unnecessary processing
    setTimeout(() => {
        mutationObserver.disconnect();
    }, 30000); // Stop after 30 seconds
})();