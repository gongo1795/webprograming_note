document.addEventListener('DOMContentLoaded', () => {
    // 탭 버튼들과 개념 섹션들을 모두 가져옵니다.
    const tabButtons = document.querySelectorAll('.tab-button');
    const conceptSections = document.querySelectorAll('.concept-section');

    // 각 탭 버튼에 클릭 이벤트를 추가합니다.
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 현재 활성화된 버튼의 'active' 클래스를 제거합니다.
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // 클릭된 버튼에 'active' 클래스를 추가합니다.
            button.classList.add('active');

            // 모든 개념 섹션을 숨깁니다.
            conceptSections.forEach(section => section.classList.remove('active'));

            // 클릭된 버튼의 'data-concept' 값을 가져와 해당 ID의 섹션을 찾습니다.
            const conceptId = button.getAttribute('data-concept');
            const targetSection = document.getElementById(conceptId);

            // 해당 섹션을 표시합니다.
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // 페이지 로드 시, 첫 번째 탭(HTML)이 활성화되어 있도록 보장합니다.
    // (HTML에서 이미 설정했지만, JS로 확인 차원에서 실행할 수도 있습니다.)
    document.querySelector('.tab-button.active').click();
});