function sel_chg() {
	resetBorders('b');
  
	const selstr = document.getElementById('ipt-list').value;
	const len = getLength(selstr);
  
	for (let i = 0; i < len; i++) {
	  set_border(selstr + '-' + (i + 1));
	}
  }
  
  function resetBorders(className) {
	const cel_b = document.getElementsByClassName(className);
	for (let i = 0; i < cel_b.length; i++) {
	  cel_b[i].style.border = "1px solid black";
	}
  }
  
  function getLength(selstr) {
	switch (selstr) {
	  case "v1": return 5;
	  case "v2": return 4;
	  case "v4":
	  case "h1":
	  case "h6": return 5;
	  case "v5":
	  case "h7": return 4;
	  case "h3": return 3;
	  default: return 0;
	}
  }
  
  function set_border(obj_id) {
	const set_cel = document.getElementsByClassName(obj_id);
	if (set_cel.length > 0) {
	  set_cel[0].style.border = "3px solid black";
	}
  }
  
  function click_submit() {
	const D_PASS = ["しずこう", "シズコウ"];
	const res = document.getElementById('pass_in').value;
  
	if (res.length > 0) {
	  if (D_PASS.includes(res)) {
		handleCorrectAnswer();
	  } else {
		window.alert('回答が違うようです…再チャレンジ！');
	  }
	} else {
	  window.alert('パスワードが未入力です');
	}
  }
  
  function handleCorrectAnswer() {
	window.alert('正解です！');
	const elementsToToggle = ['present', 'tweet', 'pass', 'tbl', 'sime'];
	elementsToToggle.forEach(id => {
	  const element = document.getElementById(id);
	  if (element) {
		element.style.display = 'none';
	  }
	});
  }
  
  function click_links(kind) {
	const urls = [
	  "https://www.tobiratory.com/",
	  "https://tobirapolis.notion.site/TOBIRAPOLIS-9bc44d2cd75d4d4db1a31cc3779ecee9",
	  "https://x.com/Tobiratory?s=20"
	];
  
	if (kind >= 1 && kind <= urls.length) {
	  window.open(urls[kind - 1]);
	}
  }
  
  function getCN(cn) {
	return document.querySelector(`.${cn}`);
  }
  
  function xw_ipt() {
	const res = document.getElementById('ipt-list').value;
	const ipt = document.getElementById('xw-iptbox').value;
	const len = getLength(res);
  
	if (ipt.length === len) {
	  for (let i = 0; i < len; i++) {
		getCN(`${res}-${i + 1}`).innerText = ipt.charAt(i);
	  }
	} else {
	  window.alert('文字数があっていません！');
	}
  }
  
  function downloadImage(url, fileName, elementId) {
	const link = document.getElementById(elementId);
	link.href = url;
	link.download = fileName;
  }
  
  function dl_pcno() {
	downloadImage(
	  'https://drive.google.com/file/d/1lQ_lGyh5JfjtHBZvF17Lglv2iLtmSIIb/view?usp=sharing',
	  'TOBIRAPOLIS祭2023クロスワード正解_PC用.png',
	  'dlpcno'
	);
  }
  
  function dl_pc4k() {
	downloadImage(
	  'https://drive.google.com/file/d/1go_lMx9QYdmqsY5P5jXWo2kOdT_pjbZf/view?usp=sharing',
	  'TOBIRAPOLIS祭2023クロスワード正解_PC用(4k).png',
	  'dlpc4k'
	);
  }
  
  function dl_mobi() {
	downloadImage(
	  'https://drive.google.com/file/d/1w1r5-Qn-lDvTntHVeiraAdj0v6v2mzm1/view?usp=sharing',
	  'TOBIRAPOLIS祭2023クロスワード正解_スマホ用.png',
	  'dlmobi'
	);
  }
  
