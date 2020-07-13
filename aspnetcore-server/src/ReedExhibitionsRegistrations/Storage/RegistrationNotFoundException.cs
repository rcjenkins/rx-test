using System;
using System.Runtime.Serialization;

namespace IO.Swagger.Storage
{
    /// <summary>
    /// Not Found Exception
    /// </summary>
    [Serializable]
    public class RegistrationNotFoundException : Exception
    {
        /// <summary>
        /// 
        /// </summary>
        public RegistrationNotFoundException()
        {
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="message"></param>
        public RegistrationNotFoundException(string message) : base(message)
        {
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="message"></param>
        /// <param name="innerException"></param>
        public RegistrationNotFoundException(string message, Exception innerException) : base(message, innerException)
        {
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="info"></param>
        /// <param name="context"></param>
        protected RegistrationNotFoundException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
