import Image from 'next/image'
import text from "../../public/assets/text.png"

const Form = () => {
  return (
    <div className='text-blue-900 bg-blue-0 lg:w-[50vw] pb-5'>
      <div className='grid place-items-center mt-6 px-4'>
        <Image src={text} alt="text" priority/>
      </div>
      <form className='px-6'>
        <div className="space-y-6">
          <div className="border-b border-gray-900/10 pb-2">
            <div className="mt-4 grid lg:grid-cols-3 md:grid-cols-2 gap-x-1 gap-y-2 sm:grid-cols-1">
              <div className="">
                <label htmlFor="full-name" className="block text-sm font-medium leading-3 text-gray-900">
                  Full name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    required
                    autoComplete="given-name"
                    className="block rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="">
                <label htmlFor="last-name" className="block text-sm font-medium leading-3 text-gray-900">
                  Phone Number (Whatsapp)
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    required
                    autoComplete="tel"
                    className="block rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="">
                <label htmlFor="email" className="block text-sm font-medium leading-3 text-gray-900">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="mt-2">
                <label htmlFor="street-address" className="block text-sm font-medium leading-3 text-gray-900">
                  Date of Birth
                </label>
                <div className="mt-1">
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    required
                    autoComplete="dob"
                    className="block rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="mt-2">
                <label htmlFor="street-address" className="block text-sm font-medium leading-3 text-gray-900">
                  Home address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    required
                    autoComplete="street-address"
                    className="block rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="mt-2">
                <label htmlFor="street-address" className="block text-sm font-medium leading-3 text-gray-900">
                  Occupation
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="occupation"
                    id="occupation"
                    autoComplete="occupation"
                    required
                    className="block rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <fieldset>
                  <div className="mt-3 space-y-3">
                    <p className='text-sm leading-3 text-gray-900'>Marital status</p>
                    <div className="flex space-x-6">
                      <div className="relative flex gap-x-2">
                      <div className="flex items-center">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-2">
                        <label htmlFor="comments" className="font-medium text-gray-900">
                          Single
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-2">
                      <div className="flex items-center">
                        <input
                          id="candidates"
                          name="candidates"
                          type="checkbox"
                          className="w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-2">
                        <label htmlFor="candidates" className="font-medium text-gray-900">
                          Married
                        </label>
                      </div>
                    </div>
                    </div>
                </div>
                </fieldset>
              </div>

              <div>
                <fieldset>
                  <div className="mt-3 space-y-3">
                    <p className='text-sm leading-3 text-gray-900'>Are you born again?</p>
                    <div className="flex gap-x-6">
                      <div className="relative flex gap-x-2">
                      <div className="flex items-center">
                        <input
                          id="comments"
                          name="comments"
                          required
                          type="checkbox"
                          className="w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                    <div className="text-sm leading-4">
                      <label htmlFor="comments" className="font-medium text-gray-900">
                        Yes
                      </label>
                    </div>
                      </div>
                      <div className="relative flex gap-x-2">
                      <div className="flex  items-center">
                        <input
                          id="candidates"
                          name="candidates"
                          type="checkbox"
                          className="w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-4">
                        <label htmlFor="candidates" className="font-medium text-gray-900">
                          No
                        </label>
                      </div>
                      </div>
                    </div>
                </div>
                </fieldset>
              </div>

              <div className='flex flex-col mt-3'>
                <label htmlFor="" className='text-sm text-gray-900'>If yes, When? (enter year)</label>  
                <input type="text" name="born-again" id="born-again" className="w-12 block rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm"/>
              </div>

              <div className='flex flex-col mt-3'>
                <label htmlFor="" className='text-sm text-gray-900'>If you are baptized in the Holy ghost, When? (enter year)</label>  
                <input type="text" name="baptism" id="baptism" className="w-12 block rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm"/>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-6">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Contact</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              We want to stay in touch. How should we contact you?.
            </p>

            <div className="mt-2 space-y-4">
              <fieldset>
                <div className="mt-2 space-x-6 flex">
                  <div className="flex gap-x-2">
                    <div className="flex items-center">
                      <input
                        id="contact"
                        name="contact"
                        type="checkbox"
                        className="w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-4">
                      <label htmlFor="comments" className="font-medium text-gray-900">
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-x-2">
                    <div className="flex items-center">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-4">
                      <label htmlFor="candidates" className="font-medium text-gray-900">
                        On WhatsApp
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-start gap-x-6">
          <button
            type="submit"
            className="submit rounded-md bg-blue-400 px-3 py-2 text-sm text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Submit
          </button>
        </div>
    </form>
    </div>
  )
}

export default Form