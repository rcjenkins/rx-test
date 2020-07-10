using IO.Swagger.Controllers;
using IO.Swagger.Models;
using IO.Swagger.Storage;
using Microsoft.AspNetCore.Mvc;
using System;
using Xunit;
using Xunit.Sdk;
using Moq;

namespace ReedExhibitionsRegistrationsTest
{
    public class ControllerTests
    {
        [Fact]
        public void SaveTest()
        {
            // Setup
            var expected = "MockRegistrationKey";

            var mockStorage = new Mock<IRegistrationStorage>();

            mockStorage.Setup(x => x.Save(It.IsAny<RegistrationRequest>())).Returns(new RegistrationResponse { RegistrationId = expected });

            /// Act
            var controller = new RegistrationsApiController(mockStorage.Object);

            var result = controller.ApiV1RegistrationsPost(new RegistrationRequest(), "123");

            // Assert
            var objectResult = Assert.IsType<ObjectResult>(result);
            var value = Assert.IsType<RegistrationResponse>(objectResult.Value);
            Assert.Equal(expected, value.RegistrationId);
        }

        [Fact]
        public void LoadTest()
        {
            // Setup
            var expected = "MockRegistrationKey";

            var mockStorage = new Mock<IRegistrationStorage>();

            mockStorage.Setup(x => x.Load(It.IsAny<string>())).Returns(new GetRegistrationResponse
            {
                Id = expected,
                Person = new Person
                {
                    FirstName = "Richard",
                    LastName = "Jenkins"
                }

            });

            /// Act
            var controller = new RegistrationsApiController(mockStorage.Object);

            var result = controller.ApiV1RegistrationsRegistrationIdGet(expected, "123");

            // Assert
            var objectResult = Assert.IsType<ObjectResult>(result);
            var value = Assert.IsType<GetRegistrationResponse>(objectResult.Value);
            Assert.Equal(expected, value.Id);
            Assert.Equal("Richard", value.Person.FirstName);
        }

        [Fact]
        public void LoadTestFailed()
        {
            // Setup
            var expected = "Registration 'MockRegistrationKey' not found";

            var id = "MockRegistrationKey";

            var mockStorage = new Mock<IRegistrationStorage>();

            mockStorage.Setup(x => x.Load(It.IsAny<string>())).Throws<RegistrationNotFoundException>();

            /// Act
            var controller = new RegistrationsApiController(mockStorage.Object);
            var result = controller.ApiV1RegistrationsRegistrationIdGet(id, "123");

            // Assert
            var objectResult = Assert.IsType<ObjectResult>(result);

            Assert.Equal(expected, objectResult.Value);
        }
    }
}
