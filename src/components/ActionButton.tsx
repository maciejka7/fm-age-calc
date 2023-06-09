// import { ReactComponent as ArrowIcon } from ';

interface Props {
  handleClick: () => void;
}

export const ActionButton = (props: Props) => {
  const { handleClick } = props;

  const cl = `
  rounded-full bg-black h-[100px] w-[100px] transition-all relative
  hover:bg-purple-600 flex content-center justify-center items-center
   `;

  return (
    <button className={cl} onClick={handleClick}>
      <img src="/src/assets/icon-arrow.svg" className="block w-10 h-10" />
    </button>
  );
};
