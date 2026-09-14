/**
 * Returns the element that currently holds focus, descending into open shadow
 * roots. `document.activeElement` only ever reports the outermost host of a
 * shadow tree, so a field inside a shadow root is otherwise invisible to any
 * check made against the document.
 *
 * Closed shadow roots are opaque by design and cannot be traversed; for those
 * the host is returned, as before.
 *
 * @param {Document} doc The document to check.
 *
 * @return {Element | null} The deepest active element.
 */
export default function getDeepActiveElement( doc ) {
	/** @type {Element | null} */
	let active = doc.activeElement;

	while ( active?.shadowRoot?.activeElement ) {
		active = active.shadowRoot.activeElement;
	}

	return active;
}
