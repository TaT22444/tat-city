// URLクエリパラメータをチェックして、City.astroから来た場合は「3Dビューに戻る」ボタンを表示
(function() {
  const urlParams = new URLSearchParams(window.location.search);
  const fromCity = urlParams.get('from') === 'city';
  
  if (fromCity) {
    // DOMContentLoadedを待たずに即座に実行（インラインスクリプトの場合）
    const checkAndShow = () => {
      const cityBackLink = document.getElementById('cityBackLink');
      if (cityBackLink) {
        cityBackLink.style.display = 'inline-flex';
      }
    };
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', checkAndShow);
    } else {
      checkAndShow();
    }
  }
})();

// 目次生成機能
(function() {
  // 目次が表示されるかどうかを確認（クライアントサイドで判定）
  const tocElement = document.getElementById('workToc');
  if (!tocElement) return;
  
  let tocGenerated = false; // 目次生成フラグ
  
  function generateTOC() {
    // 既に生成済みの場合はスキップ
    if (tocGenerated) return;
    
    const workContentBody = document.querySelector('.work-content-body');
    const tocList = document.getElementById('workTocList');
    
    if (!workContentBody || !tocList) {
      return;
    }
    
    // 見出し（h2, h3）を取得
    const headings = workContentBody.querySelectorAll('h2, h3');
    
    if (headings.length === 0) {
      // 見出しがない場合は目次を非表示
      const toc = document.getElementById('workToc');
      if (toc) toc.style.display = 'none';
      return;
    }
    
    // 見出しにIDを付与し、目次を生成
    headings.forEach((heading, index) => {
      // IDが既に設定されている場合はスキップ
      if (heading.id) return;
      
      // 見出しテキストからIDを生成
      const text = heading.textContent || '';
      const id = `heading-${index}-${text.toLowerCase().replace(/[^a-z0-9\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]+/g, '-').replace(/^-|-$/g, '')}`;
      heading.id = id;
      
      // 目次アイテムを作成
      const listItem = document.createElement('li');
      listItem.className = `toc-item toc-item-${heading.tagName.toLowerCase()}`;
      
      const link = document.createElement('a');
      link.href = `#${id}`;
      link.textContent = text;
      link.className = 'toc-link';
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById(id);
        if (target) {
          const offset = 80; // ヘッダーの高さ分のオフセット
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
      
      listItem.appendChild(link);
      tocList.appendChild(listItem);
    });
    
    tocGenerated = true;
  }
  
  // MutationObserverを使って、コンテンツが追加されるのを待つ
  const observer = new MutationObserver((mutations, obs) => {
    const workContentBody = document.querySelector('.work-content-body');
    const headings = workContentBody?.querySelectorAll('h2, h3');
    
    if (headings && headings.length > 0) {
      generateTOC();
      obs.disconnect(); // 見出しが見つかったら監視を停止
    }
  });
  
  // DOMContentLoadedを待つ
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      // まず即座に試行
      generateTOC();
      
      // 見出しが見つからない場合、MutationObserverで監視
      const workContentBody = document.querySelector('.work-content-body');
      if (workContentBody) {
        observer.observe(workContentBody, {
          childList: true,
          subtree: true
        });
      }
      
      // フォールバック: 500ms後に再試行
      setTimeout(() => {
        if (!tocGenerated) {
          generateTOC();
        }
        observer.disconnect();
      }, 500);
    });
  } else {
    // すでに読み込み済みの場合
    generateTOC();
    
    const workContentBody = document.querySelector('.work-content-body');
    if (workContentBody) {
      observer.observe(workContentBody, {
        childList: true,
        subtree: true
      });
    }
    
    // フォールバック: 500ms後に再試行
    setTimeout(() => {
      if (!tocGenerated) {
        generateTOC();
      }
      observer.disconnect();
    }, 500);
  }
})();

// リンクコピー機能
(function() {
  const copyLinkButton = document.getElementById('copyLinkButton');
  if (!copyLinkButton) return;

  copyLinkButton.addEventListener('click', async () => {
    const url = window.location.href;
    
    try {
      await navigator.clipboard.writeText(url);
      
      // ボタンのテキストを一時的に変更
      const originalText = copyLinkButton.querySelector('span');
      if (originalText) {
        const originalContent = originalText.textContent;
        originalText.textContent = 'コピーしました！';
        copyLinkButton.classList.add('copied');
        
        setTimeout(() => {
          originalText.textContent = originalContent;
          copyLinkButton.classList.remove('copied');
        }, 2000);
      }
    } catch (err) {
      // フォールバック: 古いブラウザ対応
      const textArea = document.createElement('textarea');
      textArea.value = url;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      
      try {
        document.execCommand('copy');
        const originalText = copyLinkButton.querySelector('span');
        if (originalText) {
          const originalContent = originalText.textContent;
          originalText.textContent = 'コピーしました！';
          copyLinkButton.classList.add('copied');
          
          setTimeout(() => {
            originalText.textContent = originalContent;
            copyLinkButton.classList.remove('copied');
          }, 2000);
        }
      } catch (err) {
        alert('リンクのコピーに失敗しました');
      }
      
      document.body.removeChild(textArea);
    }
  });
})();
