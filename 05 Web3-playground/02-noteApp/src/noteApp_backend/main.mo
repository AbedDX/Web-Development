import Text "mo:base/Text";
import List "mo:base/List";
import Debug "mo:base/Debug";

actor noteApp {

    public type Note = {
        id: Text;
        title: Text;
        content: Text;
    };

    stable var notes: List.List<Note> = List.nil<Note>();

    
    public func createNote(idText: Text, titleText: Text, contentText: Text) {
        let newNote: Note = {
            id = idText;
            title = titleText;
            content = contentText;
        };

        notes := List.push(newNote, notes);
        Debug.print(debug_show(notes));
    };

    public query func readNotes() : async [Note] {
        return List.toArray(notes);
    };

    
    public func removeNote(id: Text) {
        notes := List.filter(notes, func(note: Note) : Bool { note.id != id });
    }
}
