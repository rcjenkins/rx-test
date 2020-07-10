using System;
using System.Runtime.Serialization;

namespace IO.Swagger.Storage
{
    [Serializable]
    public class RegistrationNotFoundException : Exception
    {
        public RegistrationNotFoundException()
        {
        }

        public RegistrationNotFoundException(string message) : base(message)
        {
        }

        public RegistrationNotFoundException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected RegistrationNotFoundException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
