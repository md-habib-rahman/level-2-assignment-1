# 🎯 Interview Questions - Blog Task

## Q2: What is the use of the keyof keyword in TypeScript? Provide an example.
উত্তরঃ কী অফ কীওয়ার্ড টি আমরা ব্যাবহার করি যখন কোন অবজেক্ট এর প্রপার্টি বা কি গুলো নিয়ে কাজ করতে হয়।

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