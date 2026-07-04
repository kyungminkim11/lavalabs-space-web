const equipmentDemo = document.querySelector('#demo');

if (equipmentDemo && !document.querySelector('#equipment')) {
  const equipmentSection = document.createElement('section');
  equipmentSection.className = 'section equipment-section';
  equipmentSection.id = 'equipment';
  equipmentSection.innerHTML = `
    <div class="container">
      <div class="section-heading split-heading reveal">
        <div>
          <span class="eyebrow">CAPTURE SYSTEM</span>
          <h2>상업용 공간 촬영을 위한<br /><span>실전 장비 구성.</span></h2>
        </div>
        <p>360° 가상투어와 고화질 공간 사진을 함께 제작할 수 있도록 촬영 목적에 맞는 전용 장비와 백업 구성을 운용합니다.</p>
      </div>

      <div class="equipment-layout">
        <article class="equipment-primary reveal">
          <div class="equipment-visual" aria-hidden="true">
            <div class="equipment-camera">
              <div class="equipment-lens"><i></i></div>
              <div class="equipment-screen"><span>360°</span><small>8K CAPTURE</small></div>
              <b>OSMO</b>
            </div>
            <span class="equipment-orbit orbit-one"></span>
            <span class="equipment-orbit orbit-two"></span>
          </div>

          <div class="equipment-copy">
            <div class="equipment-badge"><span></span> PRIMARY 360 CAMERA</div>
            <h3>DJI Osmo 360</h3>
            <p>공간 전체를 한 번에 기록하는 메인 360 카메라입니다. 고해상도 파노라마 이미지와 8K 360° 영상을 기반으로 매장·쇼룸·스튜디오의 구조와 동선을 자연스럽게 연결합니다.</p>

            <div class="equipment-spec-grid" aria-label="DJI Osmo 360 주요 사양">
              <div><strong>120MP</strong><span>파노라마 사진</span></div>
              <div><strong>8K 50fps</strong><span>360° 영상</span></div>
              <div><strong>1/1.1형</strong><span>CMOS 센서</span></div>
              <div><strong>105GB</strong><span>사용 가능 내장 저장공간</span></div>
            </div>

            <div class="equipment-bundle">
              <span>배터리 3개</span>
              <span>다기능 충전 케이스</span>
              <span>1.2m 인비저블 셀피 스틱</span>
              <span>퀵 릴리즈 시스템</span>
            </div>
          </div>
        </article>

        <div class="equipment-support-grid">
          <article class="equipment-support reveal" data-delay="80">
            <span class="equipment-number">01</span>
            <div>
              <small>SPACE PHOTOGRAPHY</small>
              <h3>Sony A6700</h3>
              <p>Sigma 18–50mm F2.8 렌즈를 중심으로 홈페이지, 플레이스, SNS에 활용할 공간 사진을 함께 촬영합니다.</p>
            </div>
          </article>
          <article class="equipment-support reveal" data-delay="140">
            <span class="equipment-number">02</span>
            <div>
              <small>LIGHTING SYSTEM</small>
              <h3>Godox V1S · X3</h3>
              <p>공간의 기존 분위기를 해치지 않는 범위에서 보조광을 사용해 어두운 구역과 제품 디테일을 보완합니다.</p>
            </div>
          </article>
          <article class="equipment-support reveal" data-delay="200">
            <span class="equipment-number">03</span>
            <div>
              <small>FIELD WORKFLOW</small>
              <h3>현장 백업 운영</h3>
              <p>교체 배터리와 충전 케이스, 내장 저장공간과 확장 메모리를 활용해 촬영 중단 위험을 줄입니다.</p>
            </div>
          </article>
        </div>
      </div>

      <p class="equipment-note reveal">실제 촬영 모드와 장비 구성은 공간의 밝기, 규모, 촬영 목적과 납품 형식에 따라 조정됩니다.</p>
    </div>
  `;

  equipmentDemo.insertAdjacentElement('beforebegin', equipmentSection);

  const addEquipmentNav = (nav) => {
    if (!nav || nav.querySelector('a[href="#equipment"]')) return;
    const link = document.createElement('a');
    link.href = '#equipment';
    link.textContent = '촬영 장비';
    const pricingLink = nav.querySelector('a[href="#pricing"]');
    nav.insertBefore(link, pricingLink || null);
  };

  addEquipmentNav(document.querySelector('.desktop-nav'));
  addEquipmentNav(document.querySelector('#mobile-menu'));
}
