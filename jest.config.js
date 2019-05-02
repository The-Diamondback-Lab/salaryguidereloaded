/**
 * @file Jest configuration
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

module.exports = {
  moduleDirectories: [
    'node_modules'
  ],
  moduleFileExtensions: [
    'js',
    'jsx'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '^./style$': 'identity-obj-proxy',
    '^preact$': '<rootDir>/node_modules/preact/dist/preact.min.js'
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/tests/__mocks__/*'
  ],
  testRegex: '(/(__tests__|tests)/.*|(\\.|/)(test|spec))\\.jsx?$',
  verbose: true
}
