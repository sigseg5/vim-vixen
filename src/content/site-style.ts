export default `
.vimvixen-console-frame {
  margin: 0;
  padding: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  position: fixed;
  z-index: -999;
  border: none !important;
  background-color: unset !important;
  pointer-events:none;
}

.vimvixen-hint {
  background-color: yellow;
  border: 1px solid gold;
  font-weight: bold;
  position: absolute;
  text-transform: uppercase;
  z-index: 2147483647;
  font-size: 12px;
  color: black;
}
`;
