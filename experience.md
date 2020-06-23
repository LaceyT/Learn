# List All issues met and how to solve them

## using postgre sql with docker image

1. run "docker pull postgre" to download latest postgre sql
2. download pgAdmin (postgre client)
3. run "docker ps" can list all container run in docker
4. run "docker run --name my-postgre -e POSTGRES_USER=user POSTGRES_PASSWORD=123456abc -p 5432:5432 -d  postgres" to start the container
5. run "docker exec -it mysql-test bash" to go to the command line of the container
6. run "psql -h localhost -p 5432 -U user" to use "user" account to connect db
7. run "\dt" under "user" can is able to see the "table list"