#!/usr/bin/env bash
#
# Generated by: https://github.com/swagger-api/swagger-codegen.git
#

dotnet restore src/ReedExhibitionsRegistrations/ && \
    dotnet build src/ReedExhibitionsRegistrations/ && \
    echo "Now, run the following to start the project: dotnet run -p src/ReedExhibitionsRegistrations/ReedExhibitionsRegistrations.csproj --launch-profile web"
