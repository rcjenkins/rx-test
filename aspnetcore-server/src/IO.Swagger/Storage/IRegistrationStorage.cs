using IO.Swagger.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace IO.Swagger.Storage
{
    /// <summary>
    /// 
    /// </summary>
    public interface IRegistrationStorage
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="registration"></param>
        /// <returns></returns>
        RegistrationResponse Save(RegistrationRequest registration);
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="registrationId"></param>
        /// <returns></returns>
        GetRegistrationResponse Load(string registrationId);
    }
}
