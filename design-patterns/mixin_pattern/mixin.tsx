import { useState } from "react";

type Option = {
  label: string;
  value: string;
};

const availableOptions: Option[] = [
  { label: "Dark Mode", value: "dark" },
  { label: "Animations", value: "animation" },
  { label: "Accessibility", value: "a11y" },
];

type CreatedMixinSet = {
  name: string;
  mixins: string[];
};

export default function AvailableMixin() {
  const [inputName, setInputName] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [createdMixins, setCreatedMixins] = useState<CreatedMixinSet[]>([]);

  const toggleSelection = (value: string) => {
    setSelected(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const handleCreate = () => {
    if (!inputName.trim() || selected.length === 0) return;

    const mixins = selected.map(option => `${inputName}-${option}`);
    setCreatedMixins(prev => [...prev, { name: inputName, mixins }]);
    setInputName(""); // reset
    setSelected([]);  // reset
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow rounded">
      <input
        type="text"
        className="border px-3 py-1 w-full rounded mb-4"
        placeholder="İsim gir (ör. button)"
        value={inputName}
        onChange={e => setInputName(e.target.value)}
      />
      <button
        onClick={() => setShowOptions(prev => !prev)}
        className="bg-black text-white border-0 px-4 py-2 rounded mb-4"
      >
        {showOptions ? "Gizle" : "Uygunları Göster"}
      </button>

      {showOptions && (
        <div className="mb-4 space-y-2">
          {availableOptions.map(opt => (
            <label
              key={opt.value}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected.includes(opt.value)}
                onChange={() => toggleSelection(opt.value)}
              />
              <span>{opt.label}</span>
            </label>
          ))}
          <button
            onClick={handleCreate}
            className="mt-2 bg-green-500 text-white border-0 px-4 py-1 rounded"
          >
            Seçilenlerden Oluştur
          </button>
        </div>
      )}

      {createdMixins.length > 0 && (
        <div className="mt-4 space-y-4">
          {createdMixins.map((set, index) => (
            <div key={index}>
              <h3 className="font-bold">{set.name} için Mixins:</h3>
              <ul className="list-disc list-inside">
                {set.mixins.map(m => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
