import { FaEdit, FaTrash } from "react-icons/fa";

// type NoteProps = {
//   title: string;
//   onEdit?: () => void;
//   onDelete?: () => void;
// };

export default function Note() {
    const onEdit  = ()=>{
        console.log('editing')
        
    }
    const onDelete = ()=>{
        console.log("deleting")
    }
  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <span className="text-gray-800 font-medium">xx</span>
      <div className="flex space-x-3">
        <button
          onClick={onEdit}
          className="text-blue-500 hover:text-blue-700 transition-colors"
          aria-label="Edit note"
        >
          <FaEdit />
        </button>
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-700 transition-colors"
          aria-label="Delete note"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
