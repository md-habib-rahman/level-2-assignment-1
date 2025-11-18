const formatValue = (value: string | number | boolean): string | number | boolean => {
	if (typeof value === 'string') {
		return value.toUpperCase()
	} else if (typeof value === 'number') {
		return value * 10
	} else if (typeof value === 'boolean') {
		return !value

	}
}

const getLength = (value: string | (number | string)[]): number => {
	if (typeof value === 'string') {

		return value.length
	} else if (Array.isArray(value)) {
		return value.length
	}
}


class Person {
	name: string
	age: number

	constructor(name: string, age: number) {
		this.name = name
		this.age = age
	}

	getDetails() {
		const returnValue = `'Name: ${this.name}, Age: ${this.age}'`
		return returnValue
	}
}


type BooksType = {
	title: string;
	rating: number;
}

const filterByRating = (books: BooksType[]): BooksType[] => {
	const finalBooks = books.filter(book => book.rating >= 4)
	return finalBooks
}






type Users = {
	id: number;
	name: string;
	email: string;
	isActive: boolean;
}

const filterActiveUsers = (users: Users[]): Users[] => {
	const activeUsers = users.filter(user => user.isActive === true)
	return activeUsers
}



interface Book {
	title: string;
	author: string;
	publishedYear: number;
	isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {
	const valueToLog = `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes' : 'No'}`
	console.log(valueToLog)
}

const getUniqueValues = (array1: string[] | number[], array2: string[] | number[]): string[] | number[] => {

	const joinedArr = array1
	for (let x = 0; x < array2.length; x++) {
		joinedArr[joinedArr.length] = array2[x]
	}
	const newArr: string[] | number[] = []

	for (let i = 0; i < joinedArr.length; i++) {
		let exists = false;
		for (let j = 0; j < newArr.length; j++) {
			if (joinedArr[i] === newArr[j]) {
				exists = true;
				break;
			}
		}
		if (!exists) {
			newArr[newArr.length] = joinedArr[i];
		}
	}
	return newArr
}

const calculateTotalPrice = (products: []): number => {
	let totalPrice = 0
	if (products.length === 0) return 0

	products.map(product => {
		let itemPrice = 0
		if (product.discount) {
			const discountedValue = (product.price * product.quantity) * product.discount / 100
			itemPrice = (product.price * product.quantity) - discountedValue
		} else {
			itemPrice = product.price * product.quantity
		}
		totalPrice += itemPrice
	})
	return totalPrice
}
