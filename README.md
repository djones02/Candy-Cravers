# Candy-Cravers

## Wireframes

---

## User Stories
- User will be able to...
1. View all candies
2. View easter candy
3. View halloween candy
4. View a single candy
5. Search through selected candies
6. Add a candy to the list
7. Add candy to the shopping cart
8. Change the amount of a single candy selected
9. Remove candy from the shopping cart

---

## React Tree
<img src="./assets/final-react-tree.png" width="800px" >

---

## API Routes


| API Route  	| Request<br>Method 	| Body                                                            	| Response                                                            	|
|------------	|-------------------	|-----------------------------------------------------------------	|---------------------------------------------------------------------	|
| /candy     	| GET               	|                                                                 	| [{...},{...},...]                                                   	|
| /candy     	| POST              	| {name, image, price, <br>nuts, chocolate, occasion}             	| {id, image, price, <br>nuts, chocolate, occasion}                   	|
| /cart      	| GET               	|                                                                 	| [{...},{...},...]                                                   	|
| /cart      	| POST              	| {name, image, price, <br>nuts, chocolate, occasion, <br>amount} 	| {id, name, image, price, <br>nuts, chocolate, occasion,<br>amount}  	|
| /cart/:id 	| PATCH             	| {amount}                                                        	| {id, name, image, price, <br>nuts, chocolate, occasion, <br>amount} 	|
| /cart/:id 	| DELETE            	|                                                                 	| {}                                                                  	|

---

## Client Side Routes

| /home                	| Home.js          	|
|----------------------	|------------------	|
| /candy               	| Candy.js         	|
| /halloween           	| Halloween.js     	|
| /easter              	| Easter.js        	|
| /about               	| About.js         	|
| /cart                	| Cart.js          	|
| /candy/:id           	| CandyItem.js     	|
| /candy/new           	| NewCandyForm.js  	|
| /candy/new/succesful 	| SuccesfulPost.js 	|

---

## Trello