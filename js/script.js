document.addEventListener('DOMContentLoaded', () => {
    // 탭 버튼들과 개념 섹션들을 모두 가져옵니다.
    const tabButtons = document.querySelectorAll('.tab-button');
    const conceptSections = document.querySelectorAll('.concept-section');

    // 탭 전환 로직 정의 함수
    const switchTab = (conceptId) => {
        // 1. 모든 버튼의 'active' 클래스 제거
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // 2. 해당 버튼에 'active' 클래스 추가
        const activeBtn = document.querySelector(`.tab-button[data-concept="${conceptId}"]`);
        if (activeBtn) activeBtn.classList.add('active');

        // 3. 모든 섹션 숨기기
        conceptSections.forEach(section => section.classList.remove('active'));

        // 4. 목표 섹션 표시
        const targetSection = document.getElementById(conceptId);
        if (targetSection) targetSection.classList.add('active');
    };

    // 각 탭 버튼에 클릭 이벤트를 추가합니다.
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const conceptId = button.getAttribute('data-concept');
            switchTab(conceptId);
        });
    });

    // 페이지 로드 시, 기본 탭(HTML) 활성화
    switchTab('html');
});