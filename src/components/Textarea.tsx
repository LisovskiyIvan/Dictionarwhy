export function Textarea() {
  return (
    <div className="w-100 mt-28 h-auto flex justify-center">
      <div className="flex w-7/12 p-3 items-center flex-col bg-white backdrop-blur-lg shadow-md rounded-md">
      <h5 className="text-2xl">Explore new words with us</h5>
      <input placeholder="Type a word here" className="w-11/12 mx-6  my-5 rounded-md border-solid border-2 px-4 py-2 focus:border-gray-500 outline-none" />
      </div>
      
    </div>
  );
}
