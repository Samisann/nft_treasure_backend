let userValidation = {
    "name": {
        "bsontype": "String",
        "description": "Nom utilisateur",
    },
    "email": {
        "bsontype": "String",
        "description": "Email utilisateur",
    },
    "password": {
        "bsontype": "String",
        "description": "Mot de passe utilisateur",
    },
    "created_at": {
        "bsontype": "Date",
        "description": "Date de création",
    },
    "updated_at": {
        "bsontype": "Date",
        "description": "Date de modification",
    }

    db.createCollection("users", { validator: { $jsonSchema: userValidation } })
    db.users.createIndex({ "email": 1 }, { unique: true })
}
