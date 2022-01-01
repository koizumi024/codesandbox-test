import "./styles.css";

const onclickAdd = () => {
  // インプットテキストの読み取り - getElementById
  const addText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // DOM生成 - createElement
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = addText;

  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    // TODO内容を取得
    const addTarget = completeBtn.parentNode;
    const addText = addTarget.firstElementChild;

    //divとbtn生成
    const completeDiv = document.createElement("div");
    completeDiv.className = "list-row";

    const backBtn = document.createElement("button");
    backBtn.innerText = "戻す";
    backBtn.addEventListener("click", () => {
      // 完了したTODOから削除
      deleteComplete(backBtn.parentNode);

      const removeText = backBtn.parentNode.firstElementChild;

      const IncompleteDiv = document.createElement("div");
      IncompleteDiv.className = "list-row";

      IncompleteDiv.appendChild(removeText);
      IncompleteDiv.appendChild(completeBtn);

      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "削除";
      deleteBtn.addEventListener("click", () => {
        // TODOリストから削除
        deleteIncomplete(deleteBtn.parentNode);
      });

      IncompleteDiv.appendChild(deleteBtn);

      document.getElementById("incomplete-list").appendChild(IncompleteDiv);
    });

    // 追加して配置
    completeDiv.appendChild(addText);
    completeDiv.appendChild(backBtn);

    document.getElementById("complete-list").appendChild(completeDiv);

    // TODOリストから削除
    deleteIncomplete(completeBtn.parentNode);
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    // TODOリストから削除
    deleteIncomplete(deleteBtn.parentNode);
  });

  // 子要素として追加 - appendChild
  div.appendChild(li);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);

  // 実際に配置
  document.getElementById("incomplete-list").appendChild(div);
};

// 共通化した関数
const deleteIncomplete = (target) => {
  // 子要素を削除 - removeChild
  document.getElementById("incomplete-list").removeChild(target);
};
const deleteComplete = (target) => {
  // 子要素を削除 - removeChild
  document.getElementById("complete-list").removeChild(target);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onclickAdd());
