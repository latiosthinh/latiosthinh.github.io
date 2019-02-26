export function remove_character(str, char_pos) {
	let part1 = str.substring(0, char_pos)
	let part2 = str.substring(char_pos + 1, str.length)
	return part1 + part2
}

export function scrollToMyRef(ref) {
	window.scrollTo(0, ref.offsetTop)
}

export function nextQuestion(index, dataLength, ref, callback) {
	if (index >= dataLength - 1) return
	setTimeout(() => ref.classList.toggle('closed'), 200)
	setTimeout(() => ref.classList.toggle('closed'), 800)
	setTimeout(() => {
		callback()
	}, 800)
}
