import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router";

// type NoteProps = {
//   title: string;
//   onEdit?: () => void;
//   onDelete?: () => void;
// };

export default function Note({id,title,updateNotes}:any) {
    const navigate = useNavigate()
    const onEdit  = ()=>{
        navigate(`/editNote/${id}`)
    }
    const onDelete = ()=>{
       updateNotes((prevNotes:any) => prevNotes.filter((note:any) => note.id !== id));
    }
  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <span className="text-gray-800 font-medium">{title}</span>
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
