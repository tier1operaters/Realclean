export default function WindowCalculator({ panes }: { panes: number }) {
  return (
    <div className="text-lg font-semibold">
      Estimated Price: <span className="text-blue-600">${panes * 8}</span>
    </div>
  );
}