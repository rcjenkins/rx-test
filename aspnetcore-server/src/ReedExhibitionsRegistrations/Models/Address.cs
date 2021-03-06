/*
 * Reed Exhibitions Mercury Technical Test
 *
 * Rest API specification for Technical Test
 *
 * OpenAPI spec version: 1.0.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;
using Newtonsoft.Json;

namespace IO.Swagger.Models
{ 
    /// <summary>
    /// The address details.
    /// </summary>
    [DataContract]
    public partial class Address : IEquatable<Address>
    { 
        /// <summary>
        /// Gets or Sets Locale
        /// </summary>
        [DataMember(Name="locale")]
        public string Locale { get; set; }

        /// <summary>
        /// Address line 1.
        /// </summary>
        /// <value>Address line 1.</value>
        [Required]
        [DataMember(Name="addressLine1")]
        public string AddressLine1 { get; set; }

        /// <summary>
        /// Address line 2.
        /// </summary>
        /// <value>Address line 2.</value>
        [DataMember(Name="addressLine2")]
        public string AddressLine2 { get; set; }

        /// <summary>
        /// Address line 3.
        /// </summary>
        /// <value>Address line 3.</value>
        [DataMember(Name="addressLine3")]
        public string AddressLine3 { get; set; }

        /// <summary>
        /// The city.
        /// </summary>
        /// <value>The city.</value>
        [DataMember(Name="city")]
        public string City { get; set; }

        /// <summary>
        /// The state.
        /// </summary>
        /// <value>The state.</value>
        [DataMember(Name="state")]
        public string State { get; set; }

        /// <summary>
        /// The post code.
        /// </summary>
        /// <value>The post code.</value>
        [DataMember(Name="postcode")]
        public string Postcode { get; set; }

        /// <summary>
        /// The ISO3 code of the country.
        /// </summary>
        /// <value>The ISO3 code of the country.</value>
        [Required]
        [DataMember(Name="countryIsoCode")]
        public string CountryIsoCode { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Address {\n");
            sb.Append("  Locale: ").Append(Locale).Append("\n");
            sb.Append("  AddressLine1: ").Append(AddressLine1).Append("\n");
            sb.Append("  AddressLine2: ").Append(AddressLine2).Append("\n");
            sb.Append("  AddressLine3: ").Append(AddressLine3).Append("\n");
            sb.Append("  City: ").Append(City).Append("\n");
            sb.Append("  State: ").Append(State).Append("\n");
            sb.Append("  Postcode: ").Append(Postcode).Append("\n");
            sb.Append("  CountryIsoCode: ").Append(CountryIsoCode).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="obj">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            return obj.GetType() == GetType() && Equals((Address)obj);
        }

        /// <summary>
        /// Returns true if Address instances are equal
        /// </summary>
        /// <param name="other">Instance of Address to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Address other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;

            return 
                (
                    Locale == other.Locale ||
                    Locale != null &&
                    Locale.Equals(other.Locale)
                ) && 
                (
                    AddressLine1 == other.AddressLine1 ||
                    AddressLine1 != null &&
                    AddressLine1.Equals(other.AddressLine1)
                ) && 
                (
                    AddressLine2 == other.AddressLine2 ||
                    AddressLine2 != null &&
                    AddressLine2.Equals(other.AddressLine2)
                ) && 
                (
                    AddressLine3 == other.AddressLine3 ||
                    AddressLine3 != null &&
                    AddressLine3.Equals(other.AddressLine3)
                ) && 
                (
                    City == other.City ||
                    City != null &&
                    City.Equals(other.City)
                ) && 
                (
                    State == other.State ||
                    State != null &&
                    State.Equals(other.State)
                ) && 
                (
                    Postcode == other.Postcode ||
                    Postcode != null &&
                    Postcode.Equals(other.Postcode)
                ) && 
                (
                    CountryIsoCode == other.CountryIsoCode ||
                    CountryIsoCode != null &&
                    CountryIsoCode.Equals(other.CountryIsoCode)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                var hashCode = 41;
                // Suitable nullity checks etc, of course :)
                    if (Locale != null)
                    hashCode = hashCode * 59 + Locale.GetHashCode();
                    if (AddressLine1 != null)
                    hashCode = hashCode * 59 + AddressLine1.GetHashCode();
                    if (AddressLine2 != null)
                    hashCode = hashCode * 59 + AddressLine2.GetHashCode();
                    if (AddressLine3 != null)
                    hashCode = hashCode * 59 + AddressLine3.GetHashCode();
                    if (City != null)
                    hashCode = hashCode * 59 + City.GetHashCode();
                    if (State != null)
                    hashCode = hashCode * 59 + State.GetHashCode();
                    if (Postcode != null)
                    hashCode = hashCode * 59 + Postcode.GetHashCode();
                    if (CountryIsoCode != null)
                    hashCode = hashCode * 59 + CountryIsoCode.GetHashCode();
                return hashCode;
            }
        }

        #region Operators
        #pragma warning disable 1591

        public static bool operator ==(Address left, Address right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(Address left, Address right)
        {
            return !Equals(left, right);
        }

        #pragma warning restore 1591
        #endregion Operators
    }
}
