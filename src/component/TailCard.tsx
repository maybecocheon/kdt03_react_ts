export default function TailCard({source, title, subtitle, keyword}) {

  // 키워드 분리해서 해시태그로 넣기
  let keywords;
  
  if (keyword != "" && keyword != null && keyword != " ") {
    if (keyword.includes(",")){
      keywords = keyword.split(", ");
      keywords = keywords.map((item, i) => <p key = {i} className="p-2 rounded-full bg-gray-300">#{item}</p>);
    } else {
       keywords = <p className="p-2 rounded-full bg-gray-300">#{keyword}</p>;
    }
  }

  return (
    <div className="rounded-lg w-100 shadow-md overflow-hidden flex flex-col">
      <img src={source} className="rounded-lg h-60 w-full object-cover"/>
      <div className="flex flex-col p-4 flex-grow">
        <div>
        <p className="font-extrabold text-2xl text-gray-900 mb-1">{title}</p>
        <p className="text-lg text-gray-900">{subtitle}</p>
        </div>
        <div className="w-full mt-5 mb-2 flex flex-wrap gap-2 text-sm text-gray-900">
          {keywords}
        </div>
      </div>
    </div>
  )
}


