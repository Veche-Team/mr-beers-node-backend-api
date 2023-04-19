# Render server 
https://mr-beers-backend.onrender.com/api

# Guide to setup backend server locally

### 1. Download and install node.js 

From https://nodejs.org/en/. Choose LTS version. Restart PC after install.

### 2. Clone current git repository 
Open terminal/git bash in your working folder, enter:
```
git clone https://github.com/Veche-Team/mr-beers-node-backend-api.git
```

### 3. Build project

Open cloned project in any terminal/IDE. 

Enter in terminal: 

```
npm run build
```

### 4. Start server

Enter in terminal:  
```
npm run start
```
Open http://localhost:8080/api

# REST API documentation

```
http://localhost:8080/api
```

### `GET`

- `/api/beverages`: Gets all beverages found in database
- `/api/beverages/:beverageUID`: Gets one beverage(by UID) found in database. 
Example: `/api/beverages/16d347e4-f4fd-4132-a831-656631fbf3f9`

- `/api/snacks`: Gets all snacks found in database
- `/api/snacks/:snacksUID`: Gets one snack(by UID) found in database. 
Example: `/api/snacks/16d347e4-f4fd-4132-a831-656631fbf3f9`

No filtration yet.

### `POST`

- `/api/beverages/add-beverage`: Creates a new beverage
  - Body:
    - `name: String` (required): The name of the beverage
    - `category: String` (required): Category of the beverage. Example: (Сидр/пиво/безалкогольное пиво)
    - `type: String` (required): The type of the beverage. Example: (Разливное/бутылочное)
    - `price: Float` (required): The price of the beverage. Example: (90) - в рублях
    - `description: String` (required): The description of the beverage
    - `volume: Float` (required): Volume of the beverage. Example: (0,5) - в литрах
    - `alcPercentage: Float` (required): Alcohol percentage of the beverage. Example: (6,7) - в процентах
    - `tags: String` (optional):  Таги для привлечения внимания. Example: (Отечественное,мужской напиток).
    - `isAvaliable: Boolean` (optional): Доступен ли напиток. Example: (true/false)
    - `salePercentage: Float` (optional): Скидка продукта. Example: (40) - в процентах
    - `imagePath: String` (optional): Путь до картинки. Картинка посылается через form-data с ключом beverageImage.

- `/api/snacks/add-snack`: Creates a new snack
  - Body:
    - `name: String` (required): The name of the snacks
    - `type: String` (required): The type of the snacks. Example: (Рыба/мясо/чипсы)
    - `price: Float` (required): The price of the snacks. Example: (73,6) - в рублях за 100г
    - `description: String` (required): The description of the snacks
    - `weight: Float` (optional): Вес снэка. Если не указан или null - то 100г.
    - `tags: String` (optional):  Таги для привлечения внимания. Example: (Соленое,жирное).
    - `imagePath: String` (optional):  Путь до картинки. Картинка посылается через form-data с ключом snackImage.

### `PUT`

- `/api/beverages/:beverageUID`: Updates beverage(by UID) with data passed into body. 
Example: `/api/beverages/16d347e4-f4fd-4132-a831-656631fbf3f9`
  - Body:
    - `name: String` (optional): The name of the beverage
    - `category: String` (required): Category of the beverage. Example: (Сидр/пиво/безалкогольное пиво)
    - `type: String` (required): The type of the beverage. Example: (Разливное/бутылочное)
    - `price: Float` (optional): The price of the beverage. Example: (90) - в рублях
    - `description: String` (optional): The description of the beverage
    - `volume: Float` (optional): Volume of the beverage. Example: (0,5) - в литрах
    - `alcPercentage: Float` (optional): Alcohol percentage of the beverage. Example: (6,7) - в процентах
    - `tags: String` (optional):  Таги для привлечения внимания. Example: (Отечественное,мужской напиток).
    - `isAvaliable: Boolean` (optional): Доступен ли напиток. Example: (true/false)
    - `salePercentage: Float` (optional): Скидка продукта. Example: (40) - в процентах
    - `imagePath: String` (optional): Путь до картинки. Картинка посылается через form-data с ключом beverageImage.

- `/api/snacks/:snackUID`: Updates beverage(by UID) with data passed into body. 
Example: `/api/snacks/16d347e4-f4fd-4132-a831-656631fbf3f9`
  - Body:
    - `name: String` (optional): The name of the snacks
    - `type: String` (optional): The type of the snacks. Example: (Рыба/мясо/чипсы)
    - `price: Float` (optional): The price of the snacks. Example: (73,6) - в рублях за 100г
    - `description: String` (optional): The description of the snacks
    - `weight: Float` (optional): Вес снэка. Если не указан или null - то 100г.
    - `tags: String` (optional):  Таги для привлечения внимания. Example: (Соленое,жирное).
    - `imagePath: String` (optional):  Путь до картинки. Картинка посылается через form-data с ключом snackImage.

### `DELETE`

- `/api/beverages/:beverageUID`: Deletes beverage(by UID) from database. 
Example: `/api/beverages/16d347e4-f4fd-4132-a831-656631fbf3f9`

- `/api/snacks/:snackUID`: Deletes snack(by UID) from database. 
Example: `/api/snacks/16d347e4-f4fd-4132-a831-656631fbf3f9`

