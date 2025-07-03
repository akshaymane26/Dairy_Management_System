import React from 'react'

export default function AddMilkEntry() {
  return (
    <>
    <div>AddMilkEntry</div>
    <form>
      <label>
        Farmer ID:
        <input type="text" name="farmerId" />
      </label>
      <br />
      <label>
        Milk Quantity (liters):
        <input type="number" name="milkQuantity" />
      </label>
      <br />
      <label>
        Date:
        <input type="date" name="date" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </>
  )
}
