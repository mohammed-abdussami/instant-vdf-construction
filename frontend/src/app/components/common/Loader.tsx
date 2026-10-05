export default function Loader({ full }: { full?: boolean }) {
  return (
    <div className={`flex items-center justify-center ${full ? 'min-h-screen' : 'min-h-[200px]'}`}>
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
        <div className="absolute inset-0 rounded-full border-4 border-t-orange-500 animate-spin" />
      </div>
    </div>
  )
}