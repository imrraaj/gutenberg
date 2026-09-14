import isTextField from './is-text-field';
import isHTMLInputElement from './is-html-input-element';
import documentHasTextSelection from './document-has-text-selection';
import getDeepActiveElement from './get-deep-active-element';

/**
 * Check whether the current document has a selection. This includes focus in
 * input fields, textareas, and general rich-text selection.
 *
 * @param {Document} doc The document to check.
 *
 * @return {boolean} True if there is selection, false if not.
 */
export default function documentHasSelection( doc ) {
	// The focused field may live inside an open shadow root, in which case
	// `doc.activeElement` is only its host.
	const activeElement = getDeepActiveElement( doc );

	return (
		!! activeElement &&
		( isHTMLInputElement( activeElement ) ||
			isTextField( activeElement ) ||
			documentHasTextSelection( doc ) )
	);
}
