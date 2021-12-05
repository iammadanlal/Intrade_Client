import React from "react";
import tw from "twin.macro";
import SelectInput from "views/components/forms/SelectInput";

// data
import {
  companyFirmTypes,
  Categories,
  countryData,
  MemberShipType,
  ListingType,
} from "../../static/data/forms";

const Container = tw.div`bg-gray-100 py-1`;
const TwoColumn = tw.div`flex flex-col lg:flex-row max-w-screen-xl mx-auto py-16 md:py-16`;
const LeftColumn = tw.div` lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div` mt-12 lg:mt-0 flex flex-col text-left`;
const Heading = tw.h1`font-black text-lg md:text-lg uppercase leading-snug max-w-3xl`;

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start`;
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-white focus:shadow-outline focus:outline-none transition duration-300 mr-4`;

export default function CompanyRegisteration() {
  return (
    <Container>
      <div className="my-5 sm:mt-0">
        <div className="md:grid md:gap-6">
          <div className="mt-0 md:col-span-2 max-w-6xl xl w-full mx-auto">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-4 bg-white sm:p-6">
                  <Heading tw="pb-2">Business Details</Heading>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="business-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        *Business Name
                      </label>
                      <input
                        type="text"
                        name="business-name"
                        id="business-name"
                        autoComplete="given-name"
                        tw="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 h-10 px-2 rounded-md border-2 outline-none"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <SelectInput
                        people={companyFirmTypes}
                        labelName="*Company/Firm Type"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <SelectInput people={Categories} labelName="*Category" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Website
                      </label>
                      <input
                        type="text"
                        name="website"
                        id="website"
                        autoComplete="given-name"
                        tw="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 h-10 px-2 rounded-md border-2 outline-none"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="contact-no"
                        className="block text-sm font-medium text-gray-700"
                      >
                        24x7 Contact No.
                      </label>
                      <input
                        type="text"
                        name="contact-no"
                        id="contact-no"
                        autoComplete="given-name"
                        tw="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 h-10 px-2 rounded-md border-2 outline-none"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <SelectInput
                        labelName="Listing Type"
                        people={ListingType}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <SelectInput
                        labelName="MemberShip Type"
                        people={MemberShipType}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="remarks"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Remarks
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="remarks"
                          name="remarks"
                          rows={2}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 p-2 rounded-md border-2 outline-none"
                          placeholder="Any extra information"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-4 bg-white sm:p-6">
                  <Heading tw="pb-2">Business Address</Heading>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="address-1"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Address 1
                      </label>
                      <input
                        type="text"
                        name="address-1"
                        id="address-1"
                        autoComplete="given-name"
                        tw="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 h-10 px-2 rounded-md border-2 outline-none"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="address-2"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Address 2
                      </label>
                      <input
                        type="text"
                        name="address-2"
                        id="address-2"
                        autoComplete="given-name"
                        tw="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 h-10 px-2 rounded-md border-2 outline-none"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="state"
                        autoComplete="given-name"
                        tw="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 h-10 px-2 rounded-md border-2 outline-none"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="given-name"
                        tw="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 h-10 px-2 rounded-md border-2 outline-none"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="zipcode"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Zip Code
                      </label>
                      <input
                        type="text"
                        name="zipcode"
                        id="zipcode"
                        autoComplete="given-name"
                        tw="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 h-10 px-2 rounded-md border-2 outline-none"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <SelectInput labelName="Country" people={countryData} />
                    </div>
                  </div>
                </div>

                <div className="px-4 py-4 bg-white sm:p-6">
                  <Heading tw="pb-2">Communication Details</Heading>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email-1"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email 1
                      </label>
                      <input
                        type="text"
                        name="email-1"
                        id="email-1"
                        autoComplete="given-name"
                        tw="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 h-10 px-2 rounded-md border-2 outline-none"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="phone-2"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone 2
                      </label>
                      <input
                        type="text"
                        name="phone-2"
                        id="phone-2"
                        autoComplete="given-name"
                        tw="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 h-10 px-2 rounded-md border-2 outline-none"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="mobile-1"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Mobile 1
                      </label>
                      <input
                        type="text"
                        name="mobile-1"
                        id="mobile-1"
                        autoComplete="given-name"
                        tw="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 h-10 px-2 rounded-md border-2 outline-none"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email-2"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email 2
                      </label>
                      <input
                        type="text"
                        name="email-2"
                        id="email-2"
                        autoComplete="given-name"
                        tw="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 h-10 px-2 rounded-md border-2 outline-none"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="phone-1"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone 1
                      </label>
                      <input
                        type="text"
                        name="phone-1"
                        id="phone-1"
                        autoComplete="given-name"
                        tw="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 h-10 px-2 rounded-md border-2 outline-none"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="mobile-2"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Mobile 2
                      </label>
                      <input
                        type="text"
                        name="mobile-2"
                        id="mobile-2"
                        autoComplete="given-name"
                        tw="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 h-10 px-2 rounded-md border-2 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div tw="py-10 bg-white flex justify-center">
                  <Actions>
                    <PrimaryButton as="a" href={"#"}>
                      Create Account
                    </PrimaryButton>
                  </Actions>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
