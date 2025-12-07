// 탭 전환 스크립트
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const conceptSections = document.querySelectorAll('.concept-section');

    const switchTab = (conceptId) => {
        // 버튼 상태 초기화
        tabButtons.forEach((btn) => btn.classList.remove('active'));
        // 섹션 숨기기
        conceptSections.forEach((section) => section.classList.remove('active'));

        // 선택된 탭/섹션 활성화
        const activeBtn = document.querySelector(`.tab-button[data-concept="${conceptId}"]`);
        const targetSection = document.getElementById(conceptId);

        if (activeBtn) activeBtn.classList.add('active');
        if (targetSection) targetSection.classList.add('active');
    };

    // 각 탭 버튼에 이벤트 등록
    tabButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const conceptId = button.getAttribute('data-concept');
            switchTab(conceptId);
        });
    });

    // 기본 탭: HTML
    switchTab('html');
});
