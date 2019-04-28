/* eslint-disable no-return-assign */

/**
 * @file Mock Browser API's which are not supported by JSDOM, e.g.
 * ServiceWorker, LocalStorage
 */

/* An example how to mock localStorage is given below 👇 */

// Mocks localStorage

/**
 * Mocks localStorage.
 *
 * @returns {object} object representing local storage
 */
// const localStorageMock = (function () {
//   let store = {}

//   return {
//     getItem: (key) => store[key] || null,
//     setItem: (key, value) => store[key] = value.toString(),
//     clear: () => store = {}
//   }
// })()

// Object.defineProperty(window, 'localStorage', {
//   value: localStorageMock
// })
