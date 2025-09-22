import { useParams } from "react-router";
import EditNoteForm from "../components/ui/editNoteForm";

export default function EditNote(){
    const { id } = useParams<{ id: string }>();

    return(
        <EditNoteForm id={id}/>
    )
}