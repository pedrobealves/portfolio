// jsdom 29 ships no showModal/close on HTMLDialogElement; this minimal polyfill
// only toggles `open` and fires `close`. It intentionally does NOT emulate the
// real showModal() preconditions: no "not connected to document" and no "already
// open" InvalidStateError. Do not treat it as full browser fidelity.
if (!HTMLDialogElement.prototype.showModal) {
  HTMLDialogElement.prototype.showModal = function (this: HTMLDialogElement) {
    this.open = true
  }
}

if (!HTMLDialogElement.prototype.close) {
  HTMLDialogElement.prototype.close = function (this: HTMLDialogElement) {
    this.open = false
    this.dispatchEvent(new Event('close'))
  }
}
