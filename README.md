## Frontend для интернет магазина на React

#### Цель

Сделать приложение на React для магазина.

![screen](doc/screen.png)

#### Тесты

```shell script
yarn test
````

#### Запуск

```shell script
yarn serve
````

Проверить работу по адресу http://127.0.0.1:3000

![screen](doc/screen.png)

#### Docker

Команды для работы с docker образом лежат в файлах _build.sh_ и _run-daemon.sh_. Настройка в Dockerfile.

```shell script
# Собрать образ с именем cherepakhin/calc-vue:v1 из Dockerfile в текущем каталоге(.)
# cherepakhin - https://hub.docker.com репозиторий
# calc-vue - имя образа
# v1 - метка, версия
sudo docker build -t cherepakhin/calc-vue:v1 .

# Загрузка В https://hub.docker.com
sudo docker push cherepakhin/calc-vue:v1

# Загрузка ИЗ https://hub.docker.com
sudo docker pull cherepakhin/calc-vue:v1

# Запуск образа cherepakhin/calc-vue:v1, проброс портов 8081->8081
sudo docker run -d --rm -p 4000:4000 cherepakhin/calc-vue:v1

```  
