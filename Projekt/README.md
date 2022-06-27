Projekt przedstawia bazę z książkami z opcją logowania. Dane książek przechowywane są w bazie Mongo, a dane do logowania w bazie Redis.

Struktura konfiguracji:


Namespace: development

ConfigMap: backend-config               - dane na temat baz Mongo i Redis
Secret: backend-secret                  - dane logowania do bazy Mongo

Deployment: redisdb-deployment          - deployment bazy Redis, 1 replika, port poda 6379
Service: redisdb-service                - service bazy Redis, port 6379
PersistentVolumeClaim: redisdb-data     - volume bazy Redis, ReadWriteOnce, 500Mi

Deployment: mongodb-deployment          - deployment bazy Mongo, 1 replika, port poda 27017
Service: mongodb-service                - service bazy Mongo, port 27017
PersistentVolumeClaim: mongodb-data     - volume bazy Mongo, ReadWriteOnce, 500Mi

Deployment: backend-deployment          - deployment backendu, 3 repliki, port poda 3001
Service: backend-service                - service backendu, port 3001

Deployment: frontend-deployment         - deployment frontendu, 3 repliki, port poda 3000
Service: frontend-service               - service frontendu, port 3000

Ingress: ingress                        - ingress projektu, host books.tusiaa.com, paths: /?(.*) - frontend; /api/?(.*) - backend,




