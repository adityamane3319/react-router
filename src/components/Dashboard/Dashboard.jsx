import React from 'react'

function Dashboard() {
  return (
    <section className="min-h-screen mt-8 p-6 text-center">

      <div className="text-sm">Announcing our next round of funding!</div>
      <h1 className="text-9xl font-bold mb-4">Data to enrich your online business</h1>
      <p className="text-2xl text-gray-600 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eligendi perferendis sapiente labore, sequi debitis?</p>

      <div>
        <button className="border rounded-xl bg-sky-400 text-black px-4 py-2 mr-2">Get started</button>
        <button className="border rounded-xl hover:bg-sky-400 hover:text-white transition text-black px-4 py-2 mr-2">Learn more →</button>
      </div>

    </section>
  )
}

export default Dashboard
