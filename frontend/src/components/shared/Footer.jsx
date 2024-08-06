import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Job Hunt</h2>
            <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" className="hover:text-gray-400" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82V14.706H9.692v-3.578h3.128V8.408c0-3.1 1.893-4.787 4.657-4.787 1.325 0 2.463.1 2.794.144v3.238l-1.918.001c-1.503 0-1.794.715-1.794 1.762v2.31h3.587l-.468 3.578h-3.119V24h6.116C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.407 0 22.676 0z" /></svg>
            </a>
            <a href="https://github.com/sajjad1384N" className="hover:text-gray-400" aria-label="GitHub">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2a10 10 0 00-3.16 19.48c.5.09.68-.22.68-.48 0-.24-.01-.88-.01-1.72-2.78.6-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.92-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.91 1.55 2.38 1.1 2.96.84.09-.66.36-1.1.65-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.67-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.02a9.53 9.53 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.4.2 2.44.1 2.7.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.7-4.57 4.95.37.32.7.95.7 1.91 0 1.38-.01 2.5-.01 2.85 0 .26.18.57.69.48A10 10 0 0012 2z" clip-rule="evenodd" />
              </svg>
            </a>

            <a href="https://linkedin.com/in/md-sajjad-ansari-621684233" className="hover:text-gray-400" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" /></svg>
            </a>
            <a href="https://leetcode.com/u/mdsajjad1384/" className="hover:text-gray-400" aria-label="LeetCode">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.271 10.744L4.689 9.041l.732-.732a8.762 8.762 0 011.697 2.435l.153.263zm5.593-5.057l-.738-.677-3.17 3.145.73.742 3.178-3.21zm.437-4.15l-.438-.394-4.2 4.205.74.742 3.65-3.682a9.191 9.191 0 01-.512.129c-3.247.938-6.409 4.537-5.961 8.324l1.302-1.297c.008-.008.014-.021.022-.029a7.365 7.365 0 014.233-2.055c3.247-.937 5.35-2.593 5.35-2.593s.885.88 1.006 1.361a11.306 11.306 0 00-1.861-.24c-1.964-.067-3.47.281-5.007.773-2.112.695-2.823 2.158-2.823 2.158s2.426 1.406 3.554 2.447c.137.125.277.248.419.368-.551 1.96-2.289 3.953-2.289 3.953s1.95 1.153 3.575 2.582c-.36.551-.716 1.102-1.1 1.624-.045-.048-.09-.097-.135-.144l-1.1-1.114a8.693 8.693 0 01-1.547-2.052l-.085-.155a7.213 7.213 0 01-.553-1.097c-1.748-3.84-5.816-3.697-7.017-.236-.12.343-.228.692-.337 1.03a7.445 7.445 0 00-.253 1.674c-.04.59-.072 1.18-.14 1.768a10.073 10.073 0 01-.826 2.928c-.355.88-.818 1.733-1.372 2.538-.21.308-.426.616-.639.92a3.935 3.935 0 00-.231.374 9.435 9.435 0 00-.166 1.748l1.217-1.055c.204-.178.402-.366.598-.555.276-.268.555-.536.822-.814 1.302-1.377 1.882-3.115 2.071-4.968.134-1.361.085-2.743.131-4.117l.11-3.319.002-.182c0-1.737.1-3.482.584-5.181.164-.583.326-1.168.528-1.74.202-.574.422-1.144.661-1.706l.236-.544.281-.504a7.738 7.738 0 011.554-1.873 8.773 8.773 0 013.251-1.832 9.563 9.563 0 014.692-.02z" />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;