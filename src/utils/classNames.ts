export const classNames = (classNameObject: Record<string, unknown>) => {
	let result = '';
	for (const [className, condition] of Object.entries(classNameObject)) {
		if (condition) {
			result = result.concat(' ' + className);
		}
	}
	return result;
};
