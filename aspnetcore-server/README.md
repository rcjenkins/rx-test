# Reed Exhibitions API - ASP.NET Core 3.0 Server

## API Highlights

  * Used swagger.io to generate the skeleton API server from supplied swagger file
  * Added CORS
  * Registrations are persisted to files 

Rest API specification for Technical Test



## Run

Linux/OS X:

```
sh build.sh
```

Windows:

```
build.bat
```

## Run in Docker

```
cd src/IO.Swagger
docker build -t io.swagger .
docker run -p 5000:5000 io.swagger
```
