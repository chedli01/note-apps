
export default function EditNoteForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <form className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">Edit Note</h2>
          <div className="text-sm text-gray-500">Update your note details</div>
        </div>

        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Title</span>
            <div className="mt-1 relative">
              <input
                type="text"
                className="block w-full rounded-lg border border-gray-200 px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-shadow"
                placeholder="Note title"
              />
            </div>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Content</span>
            <div className="mt-1 relative">
              <textarea
                className="block w-full rounded-lg border border-gray-200 px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-shadow"
                placeholder="Write your note content here..."
                rows={5}
              />
            </div>
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 transition-colors"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
