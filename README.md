# 🎯 Interview Questions - Blog Task

## Q2: What is the use of the keyof keyword in TypeScript? Provide an example.

উত্তরঃ keyof কীওয়ার্ড টি আমরা ব্যাবহার করি যখন কোন অবজেক্ট এর প্রপার্টি বা কি গুলো নিয়ে কাজ করতে হয়।

```
type User={
	name: string,
	age: number,

}
const getValue(obj:User, key:keyof User){
	return obj[key]
}
```

## Q5: Provide an example of using union and intersection types in TypeScript.

উত্তরঃ ইউনিয়ন (।) সাধারনত কোন ভ্যারিয়েবল এ একের অধিক টাইপ এসাইন করতে ব্যাবহার করা হয়।

```
let value: string | number;
const arr:(string|number)[]
```

ইন্টারসেকসন (&) ব্যাবহার করা হয় দুটো একি রকমের টাইপ ভ্যারিয়েবল কে জোড়া লাগানোর জন্য। যেমনঃ

```
type User={
	name:string;
	id:number;
}

type UserDetail: {
	phone: string;
	address: string;
}

type UserInfo= User & UserDetail;
```
