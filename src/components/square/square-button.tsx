interface Props {
   onSquareClick: () => void;
   value: any;
}

const SquareButton = ({ onSquareClick, value }: Props) => {
   console.log(value);
   return (
      <button
         className="border px-2 py-2 w-16 h-16  bg-slate-500"
         onClick={onSquareClick}
      >
         {value}
      </button>
   );
};

export default SquareButton;
