import React from 'react';

const Addincome = () => {
    return (
        <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
           <div class="grid grid-cols-3 gap-4 mb-4">
              <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                 Add Income
              </div>
              <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                 <p class="text-2xl text-gray-400 dark:text-gray-500">
                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                 </p>
              </div>
              <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                 <p class="text-2xl text-gray-400 dark:text-gray-500">
                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                 </p>
              </div>
           </div>
           <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                 <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                 </svg>
              </p>
           </div>
           <div class="grid  mb-4">
           <div className=" mb-4 rounded bg-gray-50 dark:bg-gray-800">
      <section className="bg-white dark:bg-gray-900">
      <div className="py-1 w-3/4  m-auto  lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add Income
          </h2>
          <form action="#">
          <div className="grid sm:grid-cols-1 sm:gap-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
          Income Amount
                </label>
                <input
                  type="number"
                  name="income_amount"
                  id="income_amount"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type Income Amount"
                  required
                />
              </div>
              
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">
                    Select Income Type
                  </option>
                  <option value="salary">Salary</option>
                  <option value="side project">Side Project</option>
                  <option value="youtube revenue">YouTube</option>
                  
                </select>
              </div>
              
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add product
            </button>
          </form>
        </div>
      </section>
    </div>
             
           </div>
        </div>
     </div>
    );
};

export default Addincome;