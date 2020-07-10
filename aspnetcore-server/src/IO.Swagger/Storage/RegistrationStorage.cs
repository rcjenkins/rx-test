using IO.Swagger.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace IO.Swagger.Storage
{
    /// <summary>
    /// Registration file storage
    /// </summary>
    public class RegistrationStorage : IRegistrationStorage
    {
        /// <summary>
        /// Load registration from file
        /// </summary>
        /// <param name="registrationId"></param>
        /// <returns></returns>
        public GetRegistrationResponse Load(string registrationId)
        {
            string Id = registrationId.ToLower();

            if (!System.IO.File.Exists("registrations/" + Id + ".json"))
            {
                throw new RegistrationNotFoundException();
            }
            string json = System.IO.File.ReadAllText("registrations/" + Id + ".json");


            var response = json != null
            ? JsonConvert.DeserializeObject<GetRegistrationResponse>(json)
            : default(GetRegistrationResponse);

            response.Id = Id;

            return response;
        }

        /// <summary>
        /// Save registration to file
        /// </summary>
        /// <param name="registration"></param>
        /// <returns></returns>
        public RegistrationResponse Save(RegistrationRequest registration)
        {
            Guid registrationId = Guid.NewGuid();

            RegistrationResponse response = new RegistrationResponse();

            response.RegistrationId = registrationId.ToString().ToLower();



            string json = registration.ToJson();
            Directory.CreateDirectory("registrations");
            TextWriter txt = new StreamWriter("registrations/" + response.RegistrationId + ".json");
            txt.Write(json);
            txt.Close();

            return response;
        }
    }
}
