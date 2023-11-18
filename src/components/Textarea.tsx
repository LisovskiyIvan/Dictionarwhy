export function Textarea() {
  return (
    <div className="w-5/12 h-auto bg-white backdrop-blur-lg shadow-md rounded-md">
      <div className="flex p-3 justify-between">
      <h5 className="text-2xl">Название</h5>
      <select className="text-md w-auto" name="Somename" id="">
        <option value="">someoptin</option>
      </select>
      </div>
      <textarea placeholder="ypur text will be here" className="w-11/12 mx-6 h-36 my-5 rounded-md border-solid border-2 px-4 py-2 focus:border-gray-500 outline-none"></textarea>
    </div>
  );
}
